# Visual Studio Code - Açık Kaynak Kodlu ("Code - OSS")
[![Özellik Talepleri](https://img.shields.io/github/issues/microsoft/vscode/feature-request.svg)](https://github.com/microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request+sort%3Areactions-%2B1-desc)
[![Hatalar](https://img.shields.io/github/issues/microsoft/vscode/bug.svg)](https://github.com/microsoft/vscode/issues?utf8=✓&q=is%3Aissue+is%3Aopen+label%3Abug)
[![Gitter](https://img.shields.io/badge/chat-on%20gitter-yellow.svg)](https://gitter.im/Microsoft/vscode)

## Depo

Bu depo ("`Code - OSS`") bizim (Microsoft) [Visual Studio Code](https://code.visualstudio.com) ürününü toplulukla birlikte geliştirdiğimiz yerdir. Burada yalnızca kod ve sorunlar üzerinde çalışmakla kalmıyor, aynı zamanda [yol haritamızı](https://github.com/microsoft/vscode/wiki/Roadmap), [aylık yineleme planlarımızı](https://github.com/microsoft/vscode/wiki/Iteration-Plans) ve [oyun sonu planlarımızı](https://github.com/microsoft/vscode/wiki/Running-the-Endgame) da yayınlıyoruz. Bu kaynak kodu standart [MIT lisansı](https://github.com/microsoft/vscode/blob/main/LICENSE.txt) altında herkesin kullanımına açıktır.

## Visual Studio Code

<p align="center">
  <img alt="VS Code in action" src="https://user-images.githubusercontent.com/35271042/118224532-3842c400-b438-11eb-923d-a5f66fa6785a.png">
</p>

[Visual Studio Code](https://code.visualstudio.com), geleneksel [Microsoft ürün lisansı](https://code.visualstudio.com/License/) altında yayınlanan Microsoft'a özgü özelleştirmelerle `Code - OSS` deposunun bir dağıtımıdır.

[Visual Studio Code](https://code.visualstudio.com) bir kod düzenleyicinin basitliğini, geliştiricilerin temel düzenleme-oluşturma-ayıklama döngüsü için ihtiyaç duydukları şeylerle birleştirir. Kapsamlı kod düzenleme, gezinme ve anlama desteğinin yanı sıra hafif hata ayıklama, zengin bir genişletilebilirlik modeli ve mevcut araçlarla hafif entegrasyon sağlar.

Visual Studio Code yeni özellikler ve hata düzeltmeleri ile aylık olarak güncellenir. Windows, macOS ve Linux için [Visual Studio Code'un web sitesi](https://code.visualstudio.com/Download) adresinden indirebilirsiniz. Her gün en son sürümleri almak için [Insiders derlemesini](https://code.visualstudio.com/insiders) yükleyin.

## Katkıda Bulunanlar

Bu projeye katılabilmeniz için birçok yol vardır, örneğin:

* [Hataları ve özellik isteklerini gönderin] (https://github.com/microsoft/vscode/issues) ve kontrol edildikçe doğrulamamıza yardımcı olun
* [Kaynak kodu değişikliklerini gözden geçirin](https://github.com/microsoft/vscode/pulls)
* [Belgeleri](https://github.com/microsoft/vscode-docs) gözden geçirin ve yazım hatalarından ek ve yeni içeriğe kadar her şey için çekme isteklerinde bulunun

Sorunları düzeltmek ve kod tabanına doğrudan katkıda bulunmakla ilgileniyorsanız,
lütfen aşağıdakileri kapsayan [Nasıl Katkıda Bulunulur] (https://github.com/microsoft/vscode/wiki/How-to-Contribute) belgesine bakın:

* [Kaynaktan nasıl derlenir ve çalıştırılır](https://github.com/microsoft/vscode/wiki/How-to-Contribute)
* [Hata ayıklama ve test çalıştırma dahil olmak üzere geliştirme iş akışı](https://github.com/microsoft/vscode/wiki/How-to-Contribute#debugging)
* [Kodlama kılavuzları](https://github.com/microsoft/vscode/wiki/Coding-Guidelines)
* [Çekme isteği gönderme](https://github.com/microsoft/vscode/wiki/How-to-Contribute#pull-requests)
* [Üzerinde çalışılacak bir konu bulma](https://github.com/microsoft/vscode/wiki/How-to-Contribute#where-to-contribute)
* [Çevirilere katkıda bulunmak](https://aka.ms/vscodeloc)

## Geri bildirim

* [Stack Overflow]'a soru sorun (https://stackoverflow.com/questions/tagged/vscode)
* [Yeni bir özellik talep edin](CONTRIBUTING.md)
* Upvote [popüler özellik istekleri](https://github.com/microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request+sort%3Areactions-%2B1-desc)
* [Sorun bildir](https://github.com/microsoft/vscode/issues)
* Uzantı yazar topluluğuyla [GitHub Discussions](https://github.com/microsoft/vscode-discussions/discussions) veya [Slack](https://aka.ms/vscode-dev-community) üzerinden bağlantı kurun
* [@code](https://twitter.com/code) adresini takip edin ve ne düşündüğünüzü bize bildirin!

Bu kanalların her birinin açıklaması ve mevcut diğer bazı topluluk odaklı kanallar hakkında bilgi için [wiki](https://github.com/microsoft/vscode/wiki/Feedback-Channels) adresimize bakın.

## İlgili Projelerimiz

VS Code'un temel bileşenlerinin ve uzantılarının çoğu GitHub'da kendi depolarında bulunur. Örneğin, [node debug adapter](https://github.com/microsoft/vscode-node-debug) ve [mono debug adapter](https://github.com/microsoft/vscode-mono-debug) depoları birbirinden ayrıdır. Tam bir liste için lütfen [wiki](https://github.com/microsoft/vscode/wiki) adresimizdeki [İlgili Projeler](https://github.com/microsoft/vscode/wiki/Related-Projects) sayfasını ziyaret edin.

## Paketlenmiş Uzantılar

VS Code, [extensions](uzantılar) klasöründe bulunan ve birçok dil için gramerler ve parçacıklar içeren bir dizi yerleşik uzantı içerir. Bir dil için zengin dil desteği (kod tamamlama, Go to Definition) sağlayan uzantılar `language-features` son ekine sahiptir. Örneğin, `json` uzantısı `JSON` için renklendirme sağlar ve `json-language-features` uzantısı `JSON` için zengin dil desteği sağlar.

## Geliştirme Konteynerleri

Bu depo bir Visual Studio Code Dev Containers / GitHub Codespaces geliştirme kapsayıcısı içerir.

- [Dev Containers](https://aka.ms/vscode-remote/download/containers) için **Dev Containers: Clone Repository in Container Volume...** komutunu kullanarak macOS ve Windows üzerinde daha iyi disk I/O için bir Docker birimi oluşturabilirsiniz.
     - VS Code ve Docker zaten yüklüyse, başlamak için [buraya](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/microsoft/vscode) da tıklayabilirsiniz. Bu, VS Code'un gerekirse Dev Containers uzantısını otomatik olarak yüklemesine, kaynak kodunu bir konteyner birimine klonlamasına ve kullanım için bir dev konteynerini döndürmesine neden olacaktır.
- Codespaces için VS Code'da [GitHub Codespaces](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) uzantısını yükleyin ve **Codespaces: Create New Codespace** komutunu kullanın.

Docker / Kod Alanı, tam derlemeyi çalıştırmak için en az **4 Çekirdek ve 6 GB RAM'e (8 GB önerilir)** sahip olmalıdır. Daha fazla bilgi için [development container README](.devcontainer/README.md) bölümüne bakın.

## Davranış Kuralları

Bu proje [Microsoft Açık Kaynak Davranış Kuralları](https://opensource.microsoft.com/codeofconduct/)'nı benimsemiştir. Daha fazla bilgi için [Davranış Kuralları SSS](https://opensource.microsoft.com/codeofconduct/faq/) bölümüne bakın veya herhangi bir ek soru veya yorum için [opencode@microsoft.com](mailto:opencode@microsoft.com) ile iletişime geçin.

## Lisans

Telif hakkı (c) Microsoft Corporation. Tüm hakları saklıdır.

[MIT](LICENSE.txt) lisansı altında lisanslanmıştır.
