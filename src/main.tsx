import { StrictMode, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import {
  clanWar,
  clans,
  forgeLevels,
  gearGrades,
  gearSlots,
  leagueRows,
  leagueRules,
  mountSources,
  mounts,
  navItems,
  offlineGuides,
  optionBuilds,
  options,
  pets,
  runePriorities,
  runes,
  searchIndex,
  shopResetRules,
  skills,
  sourcePages,
  spendItems,
  startGuides,
  steppingStone,
} from "./data";
import "./styles.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [optionFilter, setOptionFilter] = useState("전체");
  const [forgeFilter, setForgeFilter] = useState("전체");
  const [leagueFilter, setLeagueFilter] = useState("전체");
  const [leagueSort, setLeagueSort] = useState("기본");

  const normalizedQuery = query.trim().toLowerCase();
  const searchResults = useMemo(() => {
    if (!normalizedQuery) return [];
    return searchIndex
      .filter((item) => `${item.section} ${item.title} ${item.body}`.toLowerCase().includes(normalizedQuery))
      .slice(0, 8);
  }, [normalizedQuery]);

  const filteredOptions = options.filter((item) => {
    if (optionFilter === "전체") return true;
    return item.beforeQuantum.includes(optionFilter) || item.afterQuantum.includes(optionFilter) || item.name.includes(optionFilter);
  });

  const filteredForgeLevels = forgeLevels.filter((item) => {
    if (forgeFilter === "전체") return true;
    return item.odds.includes(forgeFilter) || item.level.includes(forgeFilter);
  });

  const filteredLeagueRows = leagueRows
    .filter((item) => leagueFilter === "전체" || item.rank === leagueFilter)
    .slice()
    .sort((a, b) => {
      if (leagueSort === "태엽 높은순") return parseReward(b.clockwork) - parseReward(a.clockwork);
      if (leagueSort === "스킬티켓 높은순") return parseReward(b.skillTicket) - parseReward(a.skillTicket);
      return 0;
    });

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="topNav">
        <a className="brand" href="#top" aria-label="Forge Master Korea Guide" onClick={closeMenu}>
          <span className="brandMark">FM</span>
          <span>Forge Guide</span>
        </a>
        <nav className="navLinks" aria-label="주요 공략">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="primaryButton desktopCta" href="#options">
          메타 보기
        </a>
        <button className="menuButton" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen}>
          <span />
          <span />
          <span />
        </button>
      </header>

      {menuOpen ? (
        <div className="mobileMenu">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="primaryPill" href="#source" onClick={closeMenu}>
            원문 보기
          </a>
        </div>
      ) : null}

      <main id="top">
        <section className="hero">
          <div className="heroCopy">
            <p className="eyebrow">Korea Community Guidebook Ver08.0</p>
            <h1>
              Forge Master를
              <span>공략 데이터처럼</span>
              빠르게 읽는다
            </h1>
            <p className="heroText">
              옵션 티어, 장비 확률, 스킬 테이블, 펫/룬/탈것, 클랜전, 리그 보상, 과금 판단과 디딤돌까지 한 화면에서 찾는 공략 허브입니다.
            </p>
            <div className="searchBox">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="옵션, 양자, 리그, 탈것, 디딤돌 검색"
                aria-label="공략 검색"
              />
              <a className="primaryButton" href={searchResults[0] ? `#${searchResults[0].target}` : "#start"}>
                이동
              </a>
            </div>
            {searchResults.length > 0 ? (
              <div className="searchResults">
                {searchResults.map((item) => (
                  <a key={`${item.section}-${item.title}`} href={`#${item.target}`}>
                    <span>{item.section}</span>
                    <strong>{item.title}</strong>
                    <small>{item.body}</small>
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <aside className="marketCard" aria-label="핵심 메타 요약">
            <div className="tabs">
              <span className="activeTab">Core Meta</span>
              <span>Quantum</span>
              <span>League</span>
            </div>
            <Metric label="더블찬스" value="100%" tone="up" note="권장" />
            <Metric label="공격속도" value="80%+" tone="up" note="핵심" />
            <Metric label="생명력 흡수" value="40%+" tone="neutral" note="양자 전" />
            <Metric label="치확 / 치피" value="7 / 7" tone="up" note="최종" />
            <Metric label="원문 페이지" value="23" tone="neutral" note="반영" />
          </aside>
        </section>

        <Section id="start" eyebrow="Start Guide" title="처음 접속하면 먼저 확인할 것">
          <div className="quickGrid">
            {startGuides.map((guide, index) => (
              <article className="quickCard" key={guide.title}>
                <span className="number">{String(index + 1).padStart(2, "0")}</span>
                <em>{guide.tag}</em>
                <h3>{guide.title}</h3>
                <p>{guide.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <section className="splitSection" id="options">
          <div>
            <p className="eyebrow">Options</p>
            <h2>옵션은 전투력보다 실제 승패에 더 가깝다</h2>
            <p className="mutedText">
              장비, 펫, 탈것에 붙는 랜덤 요소입니다. 양자 전에는 생존과 공격 빈도, 양자 후에는 치명타 축을 중심으로 판단합니다.
            </p>
            <div className="statStrip">
              <Stat value="24" label="최종 파츠" />
              <Stat value="7" label="치확 권장" />
              <Stat value="7" label="치피 권장" />
            </div>
            <div className="buildList">
              {optionBuilds.map((item) => (
                <article key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="tableCard">
            <div className="tableToolbar">
              <strong>옵션 효율 테이블</strong>
              <select value={optionFilter} onChange={(event) => setOptionFilter(event.target.value)} aria-label="옵션 필터">
                {["전체", "1티어", "2티어", "3티어", "4티어", "치명타", "원거리"].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
            <table>
              <thead>
                <tr>
                  <th>옵션</th>
                  <th>최대</th>
                  <th>양자 전</th>
                  <th>양자 후</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                {filteredOptions.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td className="num">{row.max}</td>
                    <td>{row.beforeQuantum}</td>
                    <td className={row.afterQuantum.includes("1") ? "up" : ""}>{row.afterQuantum}</td>
                    <td>
                      {row.description}
                      <br />
                      <span className="mutedCell">{row.note}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <Section id="gear" eyebrow="Gear" title="장비 등급과 대장간 확률">
          <div className="noteCard">
            <strong>무기 방향</strong>
            <p>이동속도 옵션이 없어 근접은 상대에게 접근하며 체력 손해가 큽니다. PDF 기준 추천은 원거리 중심입니다.</p>
          </div>
          <div className="gradeGrid">
            {gearGrades.map((grade) => (
              <article className="gradeCard" key={grade.grade}>
                <div className="gradeTop">
                  <span>{grade.grade}</span>
                  <strong>{grade.options}줄</strong>
                </div>
                <p>{grade.color}</p>
                <small>{grade.role}</small>
              </article>
            ))}
          </div>
          <div className="slotGrid">
            {gearSlots.map(([slot, stat]) => (
              <article className="miniCard" key={slot}>
                <span>부위</span>
                <strong>{slot}</strong>
                <em>{stat}</em>
              </article>
            ))}
          </div>
          <div className="tableCard compact">
            <div className="tableToolbar">
              <strong>대장간 레벨별 비용, 시간, 확률</strong>
              <select value={forgeFilter} onChange={(event) => setForgeFilter(event.target.value)} aria-label="대장간 필터">
                {["전체", "양자", "지하세계", "신성", "19", "29"].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
            <table>
              <thead>
                <tr>
                  <th>레벨</th>
                  <th>비용</th>
                  <th>분할</th>
                  <th>시간</th>
                  <th>확률</th>
                </tr>
              </thead>
              <tbody>
                {filteredForgeLevels.map((row) => (
                  <tr key={row.level}>
                    <td>{row.level}</td>
                    <td className="num">{row.cost}</td>
                    <td className="num">{row.split}</td>
                    <td>{row.time}</td>
                    <td>{row.odds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <section className="splitSection" id="skills">
          <div className="visualPanel">
            <img src="/guidebook/page-08.png" alt="스킬 리스트 원문 미리보기" />
            <div>
              <span>Skills</span>
              <strong>스킬 리스트 이미지 원문도 함께 보존</strong>
            </div>
          </div>
          <div>
            <p className="eyebrow">Skills</p>
            <h2>스킬은 개인별 테이블과 티켓 관리가 핵심</h2>
            <div className="verticalCards">
              {skills.map((item) => (
                <article className="spendCard" key={item.title}>
                  <span>스킬</span>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Section id="pets" eyebrow="Pets" title="펫은 세 타입과 등급별 옵션 수로 정리">
          <div className="tableCard">
            <table>
              <thead>
                <tr>
                  <th>등급</th>
                  <th>옵션 수</th>
                  <th>분류</th>
                </tr>
              </thead>
              <tbody>
                {pets.map((pet) => (
                  <tr key={pet.grade}>
                    <td>{pet.grade}</td>
                    <td>{pet.options}</td>
                    <td>{pet.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <section className="splitSection" id="runes">
          <div>
            <p className="eyebrow">Runes</p>
            <h2>초반 룬은 길을 여는 노드부터</h2>
            <ol className="priorityList">
              {runePriorities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
          <div className="runeGrid">
            {runes.map((row) => (
              <article className="miniCard" key={`${row.group}-${row.name}`}>
                <span>{row.group}</span>
                <strong>{row.name}</strong>
                <em>{row.priority}</em>
              </article>
            ))}
          </div>
        </section>

        <Section id="mounts" eyebrow="Mounts" title="탈것은 스탯을 뻥튀기하는 보조 수단">
          <div className="noteCard">
            <strong>태엽 획득처</strong>
            <p>{mountSources.join(" / ")}</p>
          </div>
          <div className="tableCard">
            <table>
              <thead>
                <tr>
                  <th>등급</th>
                  <th>현재 피해</th>
                  <th>현재 체력</th>
                  <th>옵션</th>
                  <th>구 피해</th>
                  <th>구 체력</th>
                </tr>
              </thead>
              <tbody>
                {mounts.map((mount) => (
                  <tr key={mount.grade}>
                    <td>{mount.grade}</td>
                    <td className="up">{mount.damage}</td>
                    <td className="up">{mount.health}</td>
                    <td>{mount.options}</td>
                    <td className="mutedCell">{mount.oldDamage}</td>
                    <td className="mutedCell">{mount.oldHealth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="offline" eyebrow="Airplane Mode" title="비행기 모드는 비공식 고급 팁으로 분리">
          <div className="warningCard">
            게임 내 기능이 아니라 휴대폰 자체 네트워크 차단을 이용하는 방식입니다. 저장 상태와 계정 리스크를 이해한 뒤 참고용으로만 봐야 합니다.
          </div>
          <div className="quickGrid four">
            {offlineGuides.map((item) => (
              <article className="quickCard" key={item.title}>
                <span className="number">TIP</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <section className="splitSection" id="clan">
          <div>
            <p className="eyebrow">Clan</p>
            <h2>클랜과 클랜전은 가입 조건과 보상 컷을 먼저 본다</h2>
            <div className="verticalCards">
              {clanWar.map((item, index) => (
                <article className="spendCard" key={item}>
                  <span>Clan War</span>
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="tableCard">
            <div className="tableTitle">보유 클랜</div>
            <table>
              <thead>
                <tr>
                  <th>서버</th>
                  <th>클랜명</th>
                  <th>리더</th>
                  <th>지휘관/대장</th>
                </tr>
              </thead>
              <tbody>
                {clans.map((clan) => (
                  <tr key={`${clan.server}-${clan.name}`}>
                    <td>{clan.server}</td>
                    <td>{clan.name}</td>
                    <td>{clan.leader}</td>
                    <td>{clan.officers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <Section id="league" eyebrow="League" title="리그 보상은 랭크별로 필터링">
          <div className="tableCard">
            <div className="tableToolbar">
              <strong>리그별 보상 정리</strong>
              <div className="toolbarControls">
                <select value={leagueFilter} onChange={(event) => setLeagueFilter(event.target.value)} aria-label="리그 필터">
                  {["전체", "언랭크", "브론즈", "실버", "골드", "플래티넘", "다이아"].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
                <select value={leagueSort} onChange={(event) => setLeagueSort(event.target.value)} aria-label="리그 정렬">
                  {["기본", "태엽 높은순", "스킬티켓 높은순"].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>랭크</th>
                  <th>순위</th>
                  <th>망치</th>
                  <th>골드</th>
                  <th>스킬티켓</th>
                  <th>침략열쇠</th>
                  <th>룬</th>
                  <th>태엽</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeagueRows.map((row) => (
                  <tr key={`${row.rank}-${row.position}`}>
                    <td>{row.rank}</td>
                    <td>{row.position}</td>
                    <td className="num">{row.hammer}</td>
                    <td className="num">{row.gold}</td>
                    <td className="num">{row.skillTicket}</td>
                    <td className="num">{row.invasionKey}</td>
                    <td className="num">{row.rune}</td>
                    <td className="num up">{row.clockwork}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="ruleGrid">
            {leagueRules.map((rule) => (
              <article className="miniCard" key={rule.rank}>
                <span>{rule.rank}</span>
                <strong>승급 {rule.promote}</strong>
                <em>강등 {rule.demote}</em>
              </article>
            ))}
          </div>
        </Section>

        <section className="splitSection" id="spend">
          <div>
            <p className="eyebrow">Spending Efficiency</p>
            <h2>과금은 추천 순위보다 조건 판단이 중요</h2>
            <p className="mutedText">
              가이드북은 포지마스터의 과금 단가가 높은 편이라고 전제합니다. 구매 조건과 진행 단계에 맞춰 판단하도록 카드화했습니다.
            </p>
            <div className="noteCard">
              <strong>일일상점 초기화</strong>
              <p>{shopResetRules.join(" / ")}</p>
            </div>
          </div>
          <div className="spendGrid">
            {spendItems.map((item) => (
              <article className="spendCard" key={item.title}>
                <span>{item.condition}</span>
                <strong>{item.title}</strong>
                <p className="price">{item.price}</p>
                <p>{item.verdict}</p>
              </article>
            ))}
          </div>
        </section>

        <Section id="stepping" eyebrow="Stepping Stone" title="디딤돌은 현재 운 요소 중심">
          <div className="quickGrid four">
            {steppingStone.map((item, index) => (
              <article className="quickCard" key={item}>
                <span className="number">{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="source" eyebrow="Source Pages" title="PDF 원문 페이지 뷰어">
          <p className="mutedText sourceIntro">
            텍스트 추출로 빠지는 이미지형 표와 스크린샷을 검수할 수 있도록 23페이지 전체 미리보기를 포함했습니다.
          </p>
          <div className="sourceGrid">
            {sourcePages.map((page) => (
              <a href={page.src} target="_blank" rel="noreferrer" className="sourceCard" key={page.page}>
                <img src={page.src} alt={`Forge Master Guidebook page ${page.page}`} />
                <span>Page {page.page}</span>
              </a>
            ))}
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div>
          <strong>Forge Master Korea Guide</strong>
          <p>Guidebook Ver08.0 기반 사이트. 데이터 표와 원문 페이지 뷰어를 함께 두어 요약과 검수를 모두 지원합니다.</p>
        </div>
        <div className="footerLinks">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="guideBand" id={id}>
      <div className="sectionHeader">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Metric({ label, value, note, tone }: { label: string; value: string; note: string; tone: "up" | "neutral" }) {
  return (
    <div className="metricRow">
      <div>
        <span className="label">{label}</span>
        <strong>{value}</strong>
      </div>
      <span className={tone}>{note}</span>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function parseReward(value: string) {
  const multiplier = value.toLowerCase().includes("k") ? 1000 : 1;
  return Number.parseFloat(value.replace(/[^0-9.]/g, "")) * multiplier || 0;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
