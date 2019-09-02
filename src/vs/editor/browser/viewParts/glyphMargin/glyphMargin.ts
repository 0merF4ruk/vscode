/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import 'vs/css!./glyphMargin';
import { DynamicViewOverlay } from 'vs/editor/browser/view/dynamicViewOverlay';
import { RenderingContext } from 'vs/editor/common/view/renderingContext';
import { ViewContext } from 'vs/editor/common/view/viewContext';
import * as viewEvents from 'vs/editor/common/view/viewEvents';
import { EditorOptionId, EditorOption } from 'vs/editor/common/config/editorOptions';

export class DecorationToRender {
	_decorationToRenderBrand: void;

	public startLineNumber: number;
	public endLineNumber: number;
	public className: string;

	constructor(startLineNumber: number, endLineNumber: number, className: string) {
		this.startLineNumber = +startLineNumber;
		this.endLineNumber = +endLineNumber;
		this.className = String(className);
	}
}

export abstract class DedupOverlay extends DynamicViewOverlay {

	protected _render(visibleStartLineNumber: number, visibleEndLineNumber: number, decorations: DecorationToRender[]): string[][] {

		const output: string[][] = [];
		for (let lineNumber = visibleStartLineNumber; lineNumber <= visibleEndLineNumber; lineNumber++) {
			const lineIndex = lineNumber - visibleStartLineNumber;
			output[lineIndex] = [];
		}

		if (decorations.length === 0) {
			return output;
		}

		decorations.sort((a, b) => {
			if (a.className === b.className) {
				if (a.startLineNumber === b.startLineNumber) {
					return a.endLineNumber - b.endLineNumber;
				}
				return a.startLineNumber - b.startLineNumber;
			}
			return (a.className < b.className ? -1 : 1);
		});

		let prevClassName: string | null = null;
		let prevEndLineIndex = 0;
		for (let i = 0, len = decorations.length; i < len; i++) {
			const d = decorations[i];
			const className = d.className;
			let startLineIndex = Math.max(d.startLineNumber, visibleStartLineNumber) - visibleStartLineNumber;
			const endLineIndex = Math.min(d.endLineNumber, visibleEndLineNumber) - visibleStartLineNumber;

			if (prevClassName === className) {
				startLineIndex = Math.max(prevEndLineIndex + 1, startLineIndex);
				prevEndLineIndex = Math.max(prevEndLineIndex, endLineIndex);
			} else {
				prevClassName = className;
				prevEndLineIndex = endLineIndex;
			}

			for (let i = startLineIndex; i <= prevEndLineIndex; i++) {
				output[i].push(prevClassName);
			}
		}

		return output;
	}
}

export class GlyphMarginOverlay extends DedupOverlay {

	private readonly _context: ViewContext;
	private _lineHeight: number;
	private _glyphMargin: boolean;
	private _glyphMarginLeft: number;
	private _glyphMarginWidth: number;
	private _renderResult: string[] | null;

	constructor(context: ViewContext) {
		super();
		this._context = context;
		const options = this._context.configuration.options;
		const layoutInfo = options.get<typeof EditorOption.layoutInfo>(EditorOptionId.layoutInfo);
		this._lineHeight = this._context.configuration.editor.lineHeight;
		this._glyphMargin = this._context.configuration.editor.viewInfo.glyphMargin;
		this._glyphMarginLeft = layoutInfo.glyphMarginLeft;
		this._glyphMarginWidth = layoutInfo.glyphMarginWidth;
		this._renderResult = null;
		this._context.addEventHandler(this);
	}

	public dispose(): void {
		this._context.removeEventHandler(this);
		this._renderResult = null;
		super.dispose();
	}

	// --- begin event handlers

	public onConfigurationChanged(e: viewEvents.ViewConfigurationChangedEvent): boolean {
		const options = this._context.configuration.options;

		if (e.lineHeight) {
			this._lineHeight = this._context.configuration.editor.lineHeight;
		}
		if (e.viewInfo) {
			this._glyphMargin = this._context.configuration.editor.viewInfo.glyphMargin;
		}
		if (e.hasChanged(EditorOptionId.layoutInfo)) {
			const layoutInfo = options.get<typeof EditorOption.layoutInfo>(EditorOptionId.layoutInfo);
			this._glyphMarginLeft = layoutInfo.glyphMarginLeft;
			this._glyphMarginWidth = layoutInfo.glyphMarginWidth;
		}
		return true;
	}
	public onDecorationsChanged(e: viewEvents.ViewDecorationsChangedEvent): boolean {
		return true;
	}
	public onFlushed(e: viewEvents.ViewFlushedEvent): boolean {
		return true;
	}
	public onLinesChanged(e: viewEvents.ViewLinesChangedEvent): boolean {
		return true;
	}
	public onLinesDeleted(e: viewEvents.ViewLinesDeletedEvent): boolean {
		return true;
	}
	public onLinesInserted(e: viewEvents.ViewLinesInsertedEvent): boolean {
		return true;
	}
	public onScrollChanged(e: viewEvents.ViewScrollChangedEvent): boolean {
		return e.scrollTopChanged;
	}
	public onZonesChanged(e: viewEvents.ViewZonesChangedEvent): boolean {
		return true;
	}

	// --- end event handlers

	protected _getDecorations(ctx: RenderingContext): DecorationToRender[] {
		const decorations = ctx.getDecorationsInViewport();
		let r: DecorationToRender[] = [], rLen = 0;
		for (let i = 0, len = decorations.length; i < len; i++) {
			const d = decorations[i];
			const glyphMarginClassName = d.options.glyphMarginClassName;
			if (glyphMarginClassName) {
				r[rLen++] = new DecorationToRender(d.range.startLineNumber, d.range.endLineNumber, glyphMarginClassName);
			}
		}
		return r;
	}

	public prepareRender(ctx: RenderingContext): void {
		if (!this._glyphMargin) {
			this._renderResult = null;
			return;
		}

		const visibleStartLineNumber = ctx.visibleRange.startLineNumber;
		const visibleEndLineNumber = ctx.visibleRange.endLineNumber;
		const toRender = this._render(visibleStartLineNumber, visibleEndLineNumber, this._getDecorations(ctx));

		const lineHeight = this._lineHeight.toString();
		const left = this._glyphMarginLeft.toString();
		const width = this._glyphMarginWidth.toString();
		const common = '" style="left:' + left + 'px;width:' + width + 'px' + ';height:' + lineHeight + 'px;"></div>';

		const output: string[] = [];
		for (let lineNumber = visibleStartLineNumber; lineNumber <= visibleEndLineNumber; lineNumber++) {
			const lineIndex = lineNumber - visibleStartLineNumber;
			const classNames = toRender[lineIndex];

			if (classNames.length === 0) {
				output[lineIndex] = '';
			} else {
				output[lineIndex] = (
					'<div class="cgmr '
					+ classNames.join(' ')
					+ common
				);
			}
		}

		this._renderResult = output;
	}

	public render(startLineNumber: number, lineNumber: number): string {
		if (!this._renderResult) {
			return '';
		}
		const lineIndex = lineNumber - startLineNumber;
		if (lineIndex < 0 || lineIndex >= this._renderResult.length) {
			return '';
		}
		return this._renderResult[lineIndex];
	}
}
