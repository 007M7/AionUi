# 璐＄尞鎸囧崡

> **English version**: [CONTRIBUTING.md](CONTRIBUTING.md)

## 鍓嶇疆鏉′欢

鐜鎼缓璇峰弬鑰?[docs/contributing/development.md](docs/contributing/development.md)锛屼綘闇€瑕侊細

- Node.js 22+
- [bun](https://bun.sh)
- [prek](https://github.com/j178/prek)锛坄npm install -g @j178/prek`锛?
- **娴嬭瘯杩愯鎸囧崡**锛?  - `bun test`锛氳繍琛屾墍鏈夋祴璇?  - `bun test --project dom`锛氳繍琛?DOM 鐩稿叧娴嬭瘯
  - `bun run test:coverage`锛氱敓鎴愯鐩栫巼鎶ュ憡
  - `bun run test:e2e`锛氳繍琛岀鍒扮娴嬭瘯

### PR Checklist

鎻愪氦 PR 鍓嶈纭锛?
- [ ] `bun run format`锛堟牸寮忔鏌ワ級
- [ ] `bun run lint`锛圠int 妫€鏌ワ級
- [ ] `bunx vitest run`锛堟祴璇曢€氳繃锛?- [ ] 鏃?`any` 绫诲瀷锛圱ypeScript 涓ユ牸妯″紡锛?- [ ] 鏃犳湭澶勭悊鐨?Promise
- [ ] PR 鍙寘鍚竴涓綔鐢ㄥ煙锛堝師瀛愬寲锛?- [ ] Commit 閬靛惊 Conventional Commit 鏍煎紡

## 瑙勫垯涓€锛氬師瀛愬寲 PR

姣忎釜 PR 鍙兘鍖呭惈**涓€涓笉鍙啀鎷嗙殑 feature 鎴栦竴涓?bug fix**銆?
**鍒ゆ柇鏂规硶锛?* 闂嚜宸憋紙鎴?AI锛夛細_"杩欎釜 diff 鑳藉惁鎷嗘垚澶氫釜鐙珛鍙悎骞剁殑 PR锛?_ 濡傛灉鑳斤紝鎻愪氦鍓嶅繀椤绘媶鍒嗐€?
### 绀轰緥

**鍙帴鍙楋紙鍗曚釜 PR锛夛細**

- 涓€涓牴鍥犵殑 bug 淇锛屽嵆浣挎秹鍙婂涓枃浠讹紙渚嬪淇 toast 鍦?modal 鍜岃亰澶╁眰鐨?z-index 闂锛?- 涓€涓畬鏁寸殑鍔熻兘锛堜緥濡傚洟闃熷垱寤哄脊绐楀強鍏惰〃鍗曟牎楠岋級

**蹇呴』鎷嗗垎鎴愬涓?PR锛?*

- 鍥㈤槦鑱婂ぉ婊氬姩淇 + Sentry 鐢ㄦ埛杩借釜 + Office 棰勮鎬ц兘浼樺寲 = 3 涓?PR
- 澶氫釜涓嶇浉鍏崇殑 bug 淇鎵撳寘鍦ㄤ竴璧凤紙渚嬪鏍囬鏍忓鑸慨澶?+ i18n 缂哄け key + 璇煶杈撳叆 UI 淇锛?- 鐙珛鐨勬妧鏈眰锛堜緥濡?IPC 妗ユ帴閲嶆瀯 + 娓叉煋杩涚▼缁勪欢 + Worker 杩涚▼鍙樻洿锛屽垎灞炰笉鐩稿叧鐨勫姛鑳斤級

## 瑙勫垯浜岋細Commit 鍜?PR 鏍囬鏍煎紡

Commit message 鍜?PR 鏍囬蹇呴』浣跨敤鑻辨枃 Conventional Commit 鏍煎紡锛?
```text
<type>(<scope>): <subject>
```

`type` 蹇呴』浣跨敤浠ヤ笅鍙栧€间箣涓€锛?
| Type         | 鍚箟         | Changelog 鍙鎬?|
| ------------ | ------------ | ---------------- |
| `feat`       | 鏂板鐢ㄦ埛鍔熻兘 | 鍙             |
| `fix`        | Bug 淇     | 鍙             |
| `perf`       | 鎬ц兘浼樺寲     | 鍙             |
| `refactor`   | 浠ｇ爜閲嶆瀯     | 鍙             |
| `docs`       | 鏂囨。         | 鍙             |
| `style`      | 鏍煎紡鎴栨牱寮?  | 闅愯棌             |
| `chore`      | 缁存姢宸ヤ綔     | 闅愯棌             |
| `test`       | 娴嬭瘯         | 闅愯棌             |
| `ci`         | CI 閰嶇疆      | 闅愯棌             |
| `build`      | 鏋勫缓绯荤粺     | 闅愯棌             |

绀轰緥锛?
- `fix(preview): restore local html loading`
- `feat(workspace): add file preview shortcuts`
- `docs(contributing): document pr title format`

## 瑙勫垯涓夛細Push 鍓嶅繀椤婚€氳繃鏈湴妫€鏌?
CI 浼氬湪杩欎簺妫€鏌ュけ璐ユ椂鎷掔粷浣犵殑 PR銆?*鎺ㄨ崘鍏堝湪鏈満杩愯锛岀渷鍘绘潵鍥炴椂闂淬€?*

### 閫愭鎵ц

```bash
# 1. 鏍煎紡鍖栵紙蹇呴』杩愯 鈥?鍙敼 .ts, .tsx, .css, .json, .md锛?bun run format

# 2. Lint 妫€鏌ワ紙濡傛灉娌℃湁鏀?.ts/.tsx 鏂囦欢鍙烦杩囷級
bun run lint

# 3. 绫诲瀷妫€鏌ワ紙濡傛灉娌℃湁鏀?.ts/.tsx 鏂囦欢鍙烦杩囷級
bunx tsc --noEmit

# 4. i18n 鏍￠獙锛堜粎褰撲慨鏀逛簡 src/renderer/銆乴ocales/ 鎴?src/common/config/i18n/ 涓嬬殑鏂囦欢鏃讹級
bun run i18n:types
node scripts/check-i18n.js

# 5. 娴嬭瘯
bunx vitest run
```

### 涓€鏉″懡浠ゅ鍒?
瀹屽叏澶嶅埗 CI 妫€鏌ワ紝鍐嶈窇娴嬭瘯锛?
```bash
prek run --from-ref origin/main --to-ref HEAD
bunx vitest run
```

> `prek` 浠ュ苟琛屾ā寮忚繍琛?format-check + lint + tsc銆傚鏋滄姤閿欙紝鍏堣繍琛屼笂闈㈢殑鑷姩淇鍛戒护锛屽啀閲嶆柊杩愯 prek銆?
### 甯歌澶辫触鍙婁慨澶?
| 澶辫触绫诲瀷  | 淇鏂规硶                                               |
| --------- | ------------------------------------------------------ |
| 鏍煎紡閿欒  | `bun run format`锛堣嚜鍔ㄤ慨澶嶏級                           |
| Lint 閿欒 | `bun run lint:fix` 淇鍙嚜鍔ㄤ慨澶嶇殑閮ㄥ垎锛屽叾浣欐墜鍔ㄤ慨澶? |
| 绫诲瀷閿欒  | 淇 TypeScript 闂锛岄噸鏂拌繍琛?`bunx tsc --noEmit`     |
| i18n 閿欒 | 妫€鏌ョ己澶辩殑 key锛岃繍琛?`bun run i18n:types` 閲嶆柊鐢熸垚绫诲瀷 |
| 娴嬭瘯澶辫触  | 淇澶辫触鐨勬祴璇曟垨瀹炵幇锛岄噸鏂拌繍琛?`bunx vitest run`       |

## 鎵ц鏂瑰紡

涓嶇鍚堣鍒欐椂锛岀淮鎶よ€呭彲鑳斤細

1. **鍏抽棴骞惰姹傞噸鏂版彁浜?*锛堥閫夛級鈥斺€?姝ｇ‘閲嶆彁鍚庝綘淇濈暀鍏ㄩ儴缃插悕銆?2. **Cherry-pick 鏈変环鍊肩殑閮ㄥ垎** 鈥斺€?浣犵殑浣滆€呬俊鎭繚鐣欏湪 git 鍘嗗彶涓紝浣嗗師 PR 鏄剧ず涓?"Closed" 鑰岄潪 "Merged"銆?
浠ｇ爜椋庢牸銆佷緷璧栭€夋嫨銆佹枃妗ｆ鼎鑹茬敱缁存姢鑰呭湪鍚堝苟鍚庡鐞嗐€備綘鐨?PR 鍙渶鑱氱劍鍔熻兘鍙樻洿鏈韩銆?