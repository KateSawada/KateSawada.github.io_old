import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

/**
 * 各種コマンド documents/project/portfolio/portfolio で実行
 * デプロイ: npm run deploy
 * ローカルサーバー gatsby develop
 * 
 * https://qiita.com/mishiwata1015/items/ac65efbabb4400fd95bf#%E4%BD%9C%E6%88%90%E3%81%97%E3%81%9F%E9%9D%99%E7%9A%84%E3%82%B5%E3%82%A4%E3%83%88%E3%82%92-github-pages-%E3%81%A8%E3%81%97%E3%81%A6%E5%85%AC%E9%96%8B
 * 
 */

const IndexPage = () => (
  <Layout>
    <div class="h-screen w-screen bg-gray-400 flex items-center justify-center ">
      <span class=" text-white text-4xl">
        Welcome to KateSawada's Portfolio
      </span>

    </div>
    <div class="bg-gray-200 p-8 pr-16 pl-16 sm:pr-0 sm:pl-0">
      <div class="text-center">
        <div class="p-8v ">
          <p class="text-4xl m-4">HISTORY</p>
          <div class="flex items-baseline">
            <table class="xl:mr-56 xl:ml-56 lg:mr-40 lg:ml-40 mr-10 ml-10">
              <tr><td>2020.1 - 2021.3</td><td>株式会社キャリアビジョン 社内向けツール作成アルバイト</td></tr>
              <tr><td>2021.5 - </td><td>東海国立大学機構 情報推進部 情報基盤課 情報システムグループ 技術補佐員</td></tr>
              <tr><td>2021.11 - </td><td>名古屋大学情報学研究科 知能システム学専攻 長尾研究室 研究補助員</td></tr>
              <tr><td>2022.3 - </td><td>アイクリスタル株式会社 ソフトウェアエンジニア インターン</td></tr>
            </table>
          </div>
        </div>

        <div class="p-8v ">
          <p class="text-4xl m-4">EDUCATION</p>
          <div class="flex items-baseline">
            <table class="xl:mr-56 xl:ml-56 lg:mr-40 lg:ml-40 mr-10 ml-10">
              <tr><td>2019.3</td><td>愛知県立時習館高校 卒業</td></tr>
              <tr><td>2019.4</td><td>名古屋大学 情報学部 コンピュータ科学科 入学</td></tr>
              <tr><td>2021.4 - 2022.3</td><td>名古屋大学 空手同好会 主将</td></tr>
              <tr><td>2021.4 - </td><td>名古屋大学卓越大学院 未来エレクトロニクス創成加速DII協働大学院プログラム チームopen sesame</td></tr>
            </table>
          </div>
        </div>

        <div class="p-8">
          <p class="text-4xl m-4">LINKS</p>
          <div>
            <table>
              <tr>
               <a class="inline hover:text-green-500" href="https://github.com/KateSawada" target="_blank" rel="noopener noreferrer">GitHub</a>
              </tr>
              <tr>
                <a class="inline hover:text-green-500" href="https://qiita.com/KateSawada" target="_blank" rel="noopener noreferrer">Qiita</a>
              </tr>
            </table>

          </div>
        </div>

        <div class="p-8v ">
          <p class="text-4xl m-4">AWARDS</p>
          <div class="flex items-baseline">
            <table class="xl:mr-56 xl:ml-56 lg:mr-40 lg:ml-40 mr-10 ml-10">
              <tr><td>2021.6</td><td>Tongaliビジネスプランコンテスト2021 チームSnitch 大和証券賞</td></tr>
              <tr><td>2021.8</td><td>お盆deハッカソン 協賛企業賞</td></tr>
              <tr><td>2021.11</td><td>JPHACKS2021 プラチナスポンサー賞 バンダイナムコ研究所賞</td></tr>
              <tr><td>2022.6</td><td>Tongaliビジネスプランコンテスト2022 チームopen sesame 優秀賞 & 名古屋銀行賞 & 愛知県信用保証協会賞</td></tr>
            </table>
          </div>
        </div>

        <div class="p-8v ">
          <p class="text-4xl m-4">SKILLS</p>
          <div>
            <ul class="xl:mr-56 xl:ml-56 lg:mr-40 lg:ml-40 mr-10 ml-10">
              <li class="text-xl p-4">- Development -</li>
              <li>
                <StaticImage src="../images/lang-icons/php.svg" alt="" height={22}/>
                PHP/
                <StaticImage src="../images/lang-icons/laravel.svg" alt="" height={22}/>
                Laravel
              </li>
              <li>
                <StaticImage src="../images/lang-icons/dart.svg" alt="" height={22}/>
                Dart/
                <StaticImage src="../images/lang-icons/flutter.svg" alt="" height={22}/>
                Flutter
              </li>
              <li>
                <StaticImage src="../images/lang-icons/python.svg" alt="Python" height={22}/>
                Python
              </li>
              <li>
                <StaticImage src="../images/lang-icons/c-sharp.svg" alt="" height={22}/>
                C#/
                <StaticImage src="../images/lang-icons/unity.svg" alt="" height={22}/>
                Unity
              </li>
              <li>
                <StaticImage src="../images/lang-icons/c.svg" alt="" height={22}/>
                C/C++
              </li>
              
              
              <li class="text-xl p-4">- Hobbies -</li>
              <li>ピアノ(2006 - )</li>
              <li>空手(2008 - )</li>
            
            </ul>
          </div>
        </div>

      </div>
    </div>
    

  </Layout>
)

export default IndexPage
