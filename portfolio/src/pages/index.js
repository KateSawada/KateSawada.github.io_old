import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

/**
 * デプロイ: yarn run deploy
 * ローカルサーバー gatsby develop
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
              <tr><td>2019.3</td><td>愛知県立時習館高校 卒業</td></tr>
              <tr><td>2019.4</td><td>名古屋大学 情報学部 コンピュータ科学科 入学</td></tr>
              <tr><td>2020.1 - 2021.3</td><td>株式会社キャリアビジョン 社内向けツール作成アルバイト</td></tr>
              <tr><td>2021.4 - </td><td>名古屋大学 空手同好会 主将</td></tr>
              <tr><td>2021.4 - </td><td>名古屋大学卓越大学院 未来エレクトロニクス創成加速DII協働大学院プログラム チームopensesame</td></tr>
              <tr><td>2021.5 - </td><td>東海国立大学機構 情報推進部 情報基盤課 情報システムグループ 技術補佐員</td></tr>
            </table>
          </div>
        </div>

        <div class="p-8">
          <p class="text-4xl m-4">LINKS</p>
          <div>
            <table>
              <tr>
               <a class="inline" href="https://github.com/KateSawada" target="_blank" rel="noopener noreferrer">GitHub</a>
              </tr>
              <tr>
                <a class="inline" href="https://qiita.com/KateSawada" target="_blank" rel="noopener noreferrer">Qiita</a>
              </tr>
            </table>

          </div>
        </div>

        <div class="p-8v ">
          <p class="text-4xl m-4">AWARDS</p>
          <div class="flex items-baseline">
            <table class="xl:mr-56 xl:ml-56 lg:mr-40 lg:ml-40 mr-10 ml-10">
              <tr><td>2021.6</td><td>Tongaliビジネスプランコンテスト2021 大和証券賞</td></tr>
              <tr><td>2021.8</td><td>お盆deハッカソン 協賛企業賞</td></tr>
              <tr><td>2021.11</td><td>JPHACKS2021 プラチナスポンサー賞 バンダイナムコ研究所賞</td></tr>
            </table>
          </div>
        </div>

        <div class="p-8v ">
          <p class="text-4xl m-4">SKILLS</p>
          <div>
            <ul class="xl:mr-56 xl:ml-56 lg:mr-40 lg:ml-40 mr-10 ml-10">
              <li class="text-xl p-4">- Development -</li>
              <li>Python</li>
              <li>C/C++</li>
              <li>PHP/Laravel</li>
              <li>Dart/Flutter</li>
              <li>C#</li>
              <li>VB.Net</li>
              
              <li class="text-xl p-4">- Hobby -</li>
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
