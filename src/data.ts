export type GuideItem = {
  title: string;
  body: string;
  tag?: string;
};

export type OptionItem = {
  name: string;
  max: string;
  description: string;
  beforeQuantum: string;
  afterQuantum: string;
  note: string;
};

export type GearGrade = {
  grade: string;
  color: string;
  options: number;
  role: string;
};

export type ForgeLevel = {
  level: string;
  cost: string;
  split: string;
  time: string;
  odds: string;
};

export type RewardRow = {
  rank: string;
  position: string;
  hammer: string;
  gold: string;
  skillTicket: string;
  invasionKey: string;
  rune: string;
  clockwork: string;
};

export const navItems = [
  { id: "start", label: "시작" },
  { id: "options", label: "옵션" },
  { id: "gear", label: "장비" },
  { id: "skills", label: "스킬" },
  { id: "pets", label: "펫" },
  { id: "runes", label: "룬" },
  { id: "mounts", label: "탈것" },
  { id: "offline", label: "비행기" },
  { id: "clan", label: "클랜" },
  { id: "league", label: "리그" },
  { id: "spend", label: "과금" },
  { id: "stepping", label: "디딤돌" },
  { id: "source", label: "원문" },
] as const;

export const startGuides: GuideItem[] = [
  {
    title: "서버명 확인",
    body: "서버 확인 후 오픈톡방 닉네임을 서버명_닉네임 형식으로 맞춥니다. 예시는 S2_UnderBae2.",
    tag: "계정",
  },
  {
    title: "계정 연동 필수",
    body: "계정 연동 없이 게임을 삭제하면 진행 상황이 전부 초기화됩니다.",
    tag: "주의",
  },
  {
    title: "옵션 확인 위치",
    body: "메인 페이지 하단 좌측 리그 클릭, 리그 입장 후 본인 프로필 클릭, 옵션 확인 순서로 진입합니다. 클랜 탭도 같은 방식입니다.",
    tag: "경로",
  },
  {
    title: "무기 판단",
    body: "근접은 이동 중 체력 손해가 커서 추천하지 않습니다. 같은 스펙이면 원거리의 체감 성능이 훨씬 좋습니다.",
    tag: "전투",
  },
  {
    title: "초반 성장축",
    body: "체젠/생흡/공속/더블찬스와 오프라인 보상, 대장간 비용/시간 감소 룬을 우선 봅니다.",
    tag: "초반",
  },
];

export const options: OptionItem[] = [
  {
    name: "치명타 확률",
    max: "12%",
    description: "공격 시 치명타가 발생할 확률. 치명타 피해와 함께 적용됩니다.",
    beforeQuantum: "4티어",
    afterQuantum: "1티어",
    note: "양자템부터 2줄 옵션에서 필수적으로 채택하는 편입니다.",
  },
  {
    name: "치명타 피해",
    max: "100%",
    description: "치명타 발생 시 추가로 입히는 피해량입니다.",
    beforeQuantum: "4티어",
    afterQuantum: "1티어",
    note: "치확과 같이 묶어 후반 최상위 DPS 축을 만듭니다.",
  },
  {
    name: "블록 확률",
    max: "5%",
    description: "상대 공격과 스킬을 막을 확률입니다.",
    beforeQuantum: "3티어",
    afterQuantum: "4티어",
    note: "확률이 낮아 유용성은 낮고 꼭 필요한 경우만 선택합니다.",
  },
  {
    name: "체력 재생",
    max: "6%",
    description: "초당 회복되는 체력량입니다.",
    beforeQuantum: "1티어",
    afterQuantum: "4티어",
    note: "초반 약한 체력으로 버티게 해주는 PVE 효율 옵션입니다.",
  },
  {
    name: "체력",
    max: "15%",
    description: "최대 체력량이 증가합니다.",
    beforeQuantum: "1티어 보조",
    afterQuantum: "상황 선택",
    note: "양자 전 체젠 메타에서 같이 봅니다.",
  },
  {
    name: "생명력 흡수",
    max: "20%",
    description: "공격으로 입힌 피해의 일정 비율만큼 체력을 회복합니다.",
    beforeQuantum: "2티어",
    afterQuantum: "2티어",
    note: "공격력이 강할수록 체젠보다 좋은 효과를 볼 수 있습니다.",
  },
  {
    name: "더블 찬스",
    max: "40%",
    description: "공격을 두 번 할 수 있는 확률입니다.",
    beforeQuantum: "1-2티어",
    afterQuantum: "1티어",
    note: "100% 권장. 초과 시 큰 메리트는 없습니다.",
  },
  {
    name: "피해",
    max: "15%",
    description: "일반 공격과 스킬 효과를 높입니다.",
    beforeQuantum: "상황 선택",
    afterQuantum: "3티어",
    note: "탈것 피해와 합산되어 후반에는 원거리 피해보다 효율이 낮아질 수 있습니다.",
  },
  {
    name: "근접 피해",
    max: "50%",
    description: "근접 공격력을 증가시킵니다.",
    beforeQuantum: "4티어",
    afterQuantum: "3티어",
    note: "근접 무기 자체를 추천하지 않아 우선순위가 낮습니다.",
  },
  {
    name: "원거리 피해",
    max: "15%",
    description: "원거리 공격력을 증가시킵니다.",
    beforeQuantum: "상황 선택",
    afterQuantum: "2티어",
    note: "일반 피해와 곱연산이라 후반으로 갈수록 효율이 증가합니다.",
  },
  {
    name: "공격 속도",
    max: "40%",
    description: "공격 속도를 상승시킵니다.",
    beforeQuantum: "1-2티어",
    afterQuantum: "1티어",
    note: "최소 80% 이상을 권장합니다.",
  },
  {
    name: "스킬 피해",
    max: "30%",
    description: "스킬 효과를 증가시킵니다.",
    beforeQuantum: "상황 선택",
    afterQuantum: "상황 선택",
    note: "스킬 중심 판단 시만 별도 검토합니다.",
  },
  {
    name: "스킬 재사용 대기시간",
    max: "-7%",
    description: "스킬 재사용 대기시간을 감소시킵니다.",
    beforeQuantum: "PVP 1개",
    afterQuantum: "4티어",
    note: "PVP 막타용으로 스킬 타이밍을 맞출 때만 본인 상황에 맞춰 선택합니다.",
  },
];

export const optionBuilds = [
  {
    title: "양자 전 정석 메타",
    body: "더블찬스 100%, 생명력 흡수 40% 이상, 공격속도 80% 이상. 극옵 시 준수한 성능.",
  },
  {
    title: "양자 전 체젠 메타",
    body: "체력 재생 40% 이상, 그 외 체력 %, 스킬 쿨타임 감소 1개 선택. PVE에서 강력.",
  },
  {
    title: "최종 테크 옵션 24파츠",
    body: "원거리피해 2, 치확 7, 치피 7, 공속 5, 더블찬스 2, 생흡 1.",
  },
];

export const gearGrades: GearGrade[] = [
  { grade: "원시", color: "회색", options: 0, role: "초기 구간" },
  { grade: "중세", color: "하늘색", options: 0, role: "초반" },
  { grade: "근대초기", color: "초록색", options: 0, role: "초반 전환" },
  { grade: "현대", color: "노란색", options: 1, role: "옵션 시작" },
  { grade: "우주", color: "빨간색", options: 1, role: "중반" },
  { grade: "항성", color: "퍼플", options: 1, role: "중후반" },
  { grade: "다중우주", color: "청록색", options: 1, role: "양자 전 준비" },
  { grade: "양자", color: "바이올렛", options: 2, role: "치명타 메타 시작" },
  { grade: "지하세계", color: "갈색", options: 2, role: "후반" },
  { grade: "신성", color: "주황색", options: 2, role: "최종권" },
];

export const gearSlots = [
  ["머리", "체력"],
  ["갑옷", "체력"],
  ["신발", "체력"],
  ["벨트", "체력"],
  ["반지", "공격력"],
  ["무기", "공격력"],
  ["장갑", "공격력"],
  ["목걸이", "공격력"],
];

export const forgeLevels: ForgeLevel[] = [
  { level: "1", cost: "0", split: "1", time: "0", odds: "원시 100%" },
  { level: "1 -> 2", cost: "400", split: "1", time: "5분 무료", odds: "원시 99%, 중세 1%" },
  { level: "2 -> 3", cost: "700", split: "1", time: "15분 무료", odds: "원시 98%, 중세 2%" },
  { level: "3 -> 4", cost: "1.5k", split: "1", time: "30분 무료", odds: "원시 96%, 중세 4%" },
  { level: "4 -> 5", cost: "3.5k", split: "1", time: "1시간", odds: "원시 91.5%, 중세 8%, 근대초기 0.5%" },
  { level: "5 -> 6", cost: "10k", split: "1", time: "2시간", odds: "원시 82%, 중세 16%, 근대초기 2%" },
  { level: "6 -> 7", cost: "25k", split: "1", time: "7시간 33분", odds: "원시 64%, 중세 32%, 근대초기 4%" },
  { level: "7 -> 8", cost: "50k", split: "1", time: "13시간 6분", odds: "원시 27.8%, 중세 64%, 근대초기 8%, 현대 0.2%" },
  { level: "8 -> 9", cost: "100k", split: "1", time: "18시간 40분", odds: "원시 13%, 중세 70%, 근대초기 16%, 현대 1%" },
  { level: "9 -> 10", cost: "150k", split: "1", time: "1일 13분", odds: "원시 6%, 중세 60%, 근대초기 32%, 현대 2%" },
  { level: "10 -> 11", cost: "250k", split: "3", time: "1일 14시간", odds: "중세 31.9%, 근대초기 64%, 현대 4%, 우주 0.1%" },
  { level: "11 -> 12", cost: "337k", split: "3", time: "2일 1시간", odds: "중세 27.5%, 근대초기 64%, 현대 8%, 우주 0.5%" },
  { level: "12 -> 13", cost: "455k", split: "4", time: "2일 15시간", odds: "중세 8%, 근대초기 75%, 현대 16%, 우주 1%" },
  { level: "13 -> 14", cost: "615k", split: "4", time: "3일 11시간", odds: "근대초기 66%, 현대 32%, 우주 2%, 항성 0.05%" },
  { level: "14 -> 15", cost: "830k", split: "5", time: "4일 11시간", odds: "근대초기 31.7%, 현대 64%, 우주 4%, 항성 0.25%" },
  { level: "15 -> 16", cost: "1.121m", split: "5", time: "5일 9시간", odds: "근대초기 21.5%, 현대 70%, 우주 8%, 항성 0.5%" },
  { level: "16 -> 17", cost: "1.513m", split: "6", time: "6일 8시간", odds: "현대 82.9%, 우주 16%, 항성 1%, 다중우주 0.05%" },
  { level: "17 -> 18", cost: "2.043m", split: "7", time: "7일 6시간", odds: "현대 65.7%, 우주 32%, 항성 2%, 다중우주 0.25%" },
  { level: "18 -> 19", cost: "2.758m", split: "8", time: "8일 4시간", odds: "현대 31.5%, 우주 64%, 항성 4%, 다중우주 0.5%" },
  { level: "19 -> 20", cost: "3.723m", split: "9", time: "9일 2시간", odds: "우주 91%, 항성 8%, 다중우주 1%, 양자 0.05%" },
  { level: "20 -> 21", cost: "5.026m", split: "10", time: "10일 1시간", odds: "우주 81.7%, 항성 16%, 다중우주 2%, 양자 0.25%" },
  { level: "21 -> 22", cost: "6.785m", split: "10", time: "10일 23시간", odds: "우주 63.5%, 항성 32%, 다중우주 4%, 양자 0.5%" },
  { level: "22 -> 23", cost: "9.161m", split: "10", time: "11일 2시간", odds: "우주 27%, 항성 64%, 다중우주 8%, 양자 1%" },
  { level: "23 -> 24", cost: "12.36m", split: "10", time: "12일 19시간", odds: "항성 82%, 다중우주 16%, 양자 2%, 지하세계 0.01%" },
  { level: "24 -> 25", cost: "16.69m", split: "10", time: "13일 17시간", odds: "항성 64%, 다중우주 32%, 양자 4%, 지하세계 0.05%" },
  { level: "25 -> 26", cost: "20.03m", split: "10", time: "14일 16시간", odds: "항성 43.8%, 다중우주 50%, 양자 6%, 지하세계 0.25%" },
  { level: "26 -> 27", cost: "24.04m", split: "10", time: "15일 13시간", odds: "항성 31.5%, 다중우주 60%, 양자 8%, 지하세계 0.5%" },
  { level: "27 -> 28", cost: "28.85m", split: "10", time: "16일 12시간", odds: "항성 17%, 다중우주 70%, 양자 12%, 지하세계 1%" },
  { level: "28 -> 29", cost: "34.62m", split: "10", time: "17일 10시간", odds: "항성 17%, 다중우주 61%, 양자 20%, 지하세계 2%, 신성 0.01%" },
  { level: "29 -> 30", cost: "41.54m", split: "10", time: "18일 8시간", odds: "항성 17%, 다중우주 49%, 양자 30%, 지하세계 4%, 신성 0.05%" },
];

export const skills = [
  {
    title: "테이블형 뽑기",
    body: "스킬이 나올 확률에는 개인별로 다른 정해진 테이블이 있고, 해당 순서에 따라 뽑기가 진행됩니다.",
  },
  {
    title: "확률 변화",
    body: "던전 진행으로 확률을 올리면 테이블 일부가 변할 수 있습니다. 다만 전체 테이블이 모두 리셋되는 방식은 아닙니다.",
  },
  {
    title: "티켓 절약",
    body: "원하는 스킬이 나올 때 티켓을 쓰는 것이 재화 절약에 좋습니다. 상위 스킬이 기본적으로 좋지만 전설의 사기를 쓰는 예외가 있습니다.",
  },
  {
    title: "레벨업 판단",
    body: "스킬 레벨 상승 시 기본 패시브 상승폭은 미미하므로 상위 등급 확보를 우선합니다.",
  },
];

export const pets = [
  { grade: "일반", options: "1줄", type: "공격형 / 체력형 / 밸런스형" },
  { grade: "희귀", options: "1줄", type: "공격형 / 체력형 / 밸런스형" },
  { grade: "서사시", options: "1줄", type: "공격형 / 체력형 / 밸런스형" },
  { grade: "전설", options: "2줄", type: "공격형 / 체력형 / 밸런스형" },
  { grade: "궁극", options: "2줄", type: "공격형 / 체력형 / 밸런스형" },
  { grade: "신화", options: "2줄", type: "공격형 / 체력형 / 밸런스형" },
];

export const runes = [
  { group: "스킬, 펫&기술", name: "기술 연구 타이머", priority: "상" },
  { group: "스킬, 펫&기술", name: "기술 노드 업그레이드 비용", priority: "상" },
  { group: "스킬, 펫&기술", name: "침략 추가 알 기회", priority: "중" },
  { group: "대장간", name: "최대 오프라인 시간", priority: "상" },
  { group: "대장간", name: "코인 오프라인 보상", priority: "상" },
  { group: "대장간", name: "망치 오프라인 보상", priority: "상" },
  { group: "대장간", name: "제련 타이머", priority: "상" },
  { group: "대장간", name: "제련 업그레이드 비용", priority: "상" },
  { group: "대장간", name: "장비 판매 가격", priority: "중" },
  { group: "힘", name: "탈것 소환 비용", priority: "중" },
  { group: "힘", name: "추가 탈것 기회", priority: "중" },
  { group: "힘", name: "탈것 피해 숙련", priority: "중" },
  { group: "힘", name: "탈것 체력 숙련", priority: "중" },
];

export const runePriorities = [
  "기술트리1 위주로 찍기",
  "중요하지 않은 룬은 1개만 찍고 다음 단계로 넘어가기",
  "오프라인 보상 증가 관련 룬 찍기",
  "대장간 시간/비용 감소와 기술노드 시간/비용 감소 꾸준히 찍기",
  "힘쪽은 탈것 관련 룬만 먼저 챙기고 뒤로 미루기",
  "알 개수 증가 및 펫 능력치 룬은 틈나는 대로 찍기",
];

export const mounts = [
  { grade: "일반", damage: "+10%", health: "+10%", options: "1줄", oldDamage: "+10%", oldHealth: "+10%" },
  { grade: "희귀", damage: "+40%", health: "+40%", options: "1줄", oldDamage: "+50%", oldHealth: "+50%" },
  { grade: "서사시", damage: "+80%", health: "+80%", options: "1줄", oldDamage: "+150%", oldHealth: "+150%" },
  { grade: "전설", damage: "+150%", health: "+150%", options: "2줄", oldDamage: "+300%", oldHealth: "+300%" },
  { grade: "궁극", damage: "+250%", health: "+250%", options: "2줄", oldDamage: "+500%", oldHealth: "+500%" },
  { grade: "신화", damage: "+400%", health: "+400%", options: "2줄", oldDamage: "+800%", oldHealth: "+800%" },
];

export const mountSources = ["개인 리그 보상(실버리그 이상)", "클랜전 승패 보상", "클랜전 개인 보상", "상점 구매", "패스 보상"];

export const offlineGuides = [
  {
    title: "비행기 모드 1",
    body: "게임 접속 후 비행기 모드를 켜고 Wi-Fi가 꺼졌는지 확인합니다. 약 10초 동안 저장되지 않는 상태로 진행 가능합니다.",
  },
  {
    title: "무한 오프라인 2",
    body: "로딩 화면에서 2-3초 대기 후 홈으로 나가고, 비행기 모드 또는 데이터+Wi-Fi 끄기를 진행합니다. 재접속 후 빨간 와이파이 표시를 확인합니다.",
  },
  {
    title: "무한 오프라인 3",
    body: "로딩 화면에서 홈으로 나간 뒤 1-2분 방치, 다시 켜고 연결중 상태에서 2초 후 홈으로 나갑니다. 다시 방치 후 빨간 와이파이 표시를 확인합니다.",
  },
  {
    title: "전략적 활용",
    body: "스킬 테이블을 미리 확인하고 결과가 좋으면 정상 진행, 좋지 않으면 확률 또는 순서 변동 후 재시도합니다.",
  },
];

export const clans = [
  { server: "2서버", name: "FMKR[KOR]", leader: "밍밍", officers: "HYEREM2 / Farmerking" },
  { server: "2서버", name: "FMKR2[KOR2]", leader: "Doodle", officers: "koo / qoooooooo" },
  { server: "4서버", name: "FMKR3[KOR3]", leader: "dledle", officers: "Armless2" },
  { server: "5서버", name: "FMKR4[KOR4]", leader: "rookie7", officers: "ddongson" },
  { server: "6서버", name: "AUTO[ROK]", leader: "KaFe", officers: "Sinoni / PNEFC" },
  { server: "6서버", name: "KOREA_[SOUTH]", leader: "CATT", officers: "Citrus / KT" },
  { server: "9서버", name: "FMKR5[KOR5]", leader: "Kor666", officers: "ragend / gorilladunk" },
  { server: "9서버", name: "GEAR[KOG]", leader: "Sodak", officers: "-" },
  { server: "12서버", name: "baseball[lover]", leader: "yarr", officers: "-" },
  { server: "12서버", name: "Galaxy[CLAN]", leader: "Xirius", officers: "Luna1228 / SUSTUBE" },
  { server: "15서버", name: "GEAR KO[GR]", leader: "Sodan", officers: "로이" },
];

export const clanWar = [
  "클랜 가입 조건은 메인 스테이지 4-15입니다.",
  "총 6일간 상대 클랜과 겨뤄 합산 승리 포인트로 승패를 결정합니다.",
  "1일차부터 6일차까지 각각의 미션 수행 점수를 합산합니다.",
  "6일차 라이벌전은 리그처럼 상대를 선택해 전투하고 티켓 5장을 사용합니다.",
  "6일차 전면전은 클랜 전체 인원 단체 전투이며 스킬, 펫, 탈것 없이 자동 실행됩니다.",
  "개인 보상은 45만점을 채워 태엽을 챙기는 것을 추천합니다.",
];

export const leagueRows: RewardRow[] = [
  { rank: "언랭크", position: "1", hammer: "175", gold: "9k", skillTicket: "210", invasionKey: "1", rune: "180", clockwork: "0" },
  { rank: "언랭크", position: "2", hammer: "140", gold: "7k", skillTicket: "170", invasionKey: "0", rune: "140", clockwork: "0" },
  { rank: "언랭크", position: "3", hammer: "110", gold: "5.6k", skillTicket: "140", invasionKey: "0", rune: "0", clockwork: "0" },
  { rank: "브론즈", position: "1", hammer: "350", gold: "17.5k", skillTicket: "420", invasionKey: "2", rune: "350", clockwork: "70" },
  { rank: "브론즈", position: "2", hammer: "280", gold: "14k", skillTicket: "330", invasionKey: "1", rune: "280", clockwork: "20" },
  { rank: "브론즈", position: "3", hammer: "220", gold: "11.2k", skillTicket: "270", invasionKey: "1", rune: "220", clockwork: "0" },
  { rank: "실버", position: "1", hammer: "700", gold: "35k", skillTicket: "680", invasionKey: "3", rune: "700", clockwork: "280" },
  { rank: "실버", position: "2", hammer: "550", gold: "22.4k", skillTicket: "672", invasionKey: "2", rune: "560", clockwork: "230" },
  { rank: "실버", position: "3", hammer: "450", gold: "22.4k", skillTicket: "538", invasionKey: "2", rune: "448", clockwork: "180" },
  { rank: "골드", position: "1", hammer: "1.22k", gold: "61.2k", skillTicket: "1.47k", invasionKey: "5", rune: "1.22k", clockwork: "490" },
  { rank: "골드", position: "2", hammer: "980", gold: "49k", skillTicket: "1.17k", invasionKey: "4", rune: "980", clockwork: "392" },
  { rank: "골드", position: "3", hammer: "784", gold: "39.2k", skillTicket: "941", invasionKey: "0", rune: "784", clockwork: "314" },
  { rank: "플래티넘", position: "1", hammer: "1.75k", gold: "87.5k", skillTicket: "2.1k", invasionKey: "7", rune: "1.75k", clockwork: "700" },
  { rank: "플래티넘", position: "2", hammer: "1.4k", gold: "70k", skillTicket: "1.68k", invasionKey: "6", rune: "1.4k", clockwork: "560" },
  { rank: "플래티넘", position: "3", hammer: "1.12k", gold: "56k", skillTicket: "1.4k", invasionKey: "4", rune: "1.12k", clockwork: "448" },
  { rank: "다이아", position: "1", hammer: "2.62k", gold: "131k", skillTicket: "3.15k", invasionKey: "11", rune: "2.62k", clockwork: "1.05k" },
  { rank: "다이아", position: "2", hammer: "2.1k", gold: "105k", skillTicket: "2.52k", invasionKey: "8", rune: "2.1k", clockwork: "840" },
  { rank: "다이아", position: "3", hammer: "1.68k", gold: "84k", skillTicket: "2.01k", invasionKey: "7", rune: "1.68k", clockwork: "672" },
];

export const leagueRules = [
  { rank: "언랭크", promote: "60위 이상", demote: "없음" },
  { rank: "브론즈", promote: "40위 이상", demote: "없음" },
  { rank: "실버", promote: "20위 이상", demote: "81위 이하" },
  { rank: "골드", promote: "10위 이상", demote: "51위 이하" },
  { rank: "플래티넘", promote: "5위 이상", demote: "30위 이하" },
  { rank: "다이아", promote: "없음", demote: "21위 이하" },
];

export const spendItems = [
  { title: "초기 무기 연계", price: "39,900원", condition: "스테이지 2-1", verdict: "현대 M4, 현대 케블라, 항성 소총까지 이어지는 초반 단축형 구매." },
  { title: "진행패스 프리미엄", price: "13,000원", condition: "스테이지 2-2", verdict: "개별 보상은 작지만 누적되면 값어치가 있음." },
  { title: "3번째 알부화기", price: "보석 200", condition: "스테이지 2-15", verdict: "추천도 높음. 현질 1개만 고르면 우선 검토." },
  { title: "4번째 알부화기", price: "보석 400", condition: "보석 여유", verdict: "알작업 불가 패치 이후 여유가 있을 때 선택." },
  { title: "탈것", price: "상점/패스", condition: "초반", verdict: "구매처가 제한적이라 초반이면 나쁘지 않음." },
  { title: "기술거래", price: "일일상점", condition: "초반", verdict: "빨간 물약으로 기술트리를 빠르게 진행하는 용도." },
  { title: "열쇠거래", price: "일일상점", condition: "후반", verdict: "12개 구매 기준 한 번에 6-8던전 이상 밀 수 있을 때 검토." },
];

export const shopResetRules = ["매일 오전 9시 자동 초기화", "일일상점 상품 3개 구매 시 초기화", "초기화 시 정해진 다음 세 개 상품 등장"];

export const steppingStone = [
  "2026년 2월 2일 출시.",
  "출시 당시 결과 확인 후 재시도하는 방식의 버그가 있었으나 2026년 2월 4일 오후 6시경 테이블식으로 변경 패치.",
  "무료 토큰은 일일상점 하단에서 8개 지급.",
  "매일 오전 9시 토큰 초기화.",
  "현재 공략은 별도 없음. 운 요소 중심.",
];

export const sourcePages = Array.from({ length: 23 }, (_, index) => {
  const page = index + 1;
  return {
    page,
    src: `/guidebook/page-${String(page).padStart(2, "0")}.png`,
  };
});

export const searchIndex = [
  ...startGuides.map((item) => ({ section: "시작", title: item.title, body: item.body, target: "start" })),
  ...options.map((item) => ({ section: "옵션", title: item.name, body: `${item.description} ${item.note}`, target: "options" })),
  ...gearGrades.map((item) => ({ section: "장비", title: item.grade, body: `${item.color} ${item.options}줄 ${item.role}`, target: "gear" })),
  ...forgeLevels.map((item) => ({ section: "대장간", title: item.level, body: `${item.cost} ${item.time} ${item.odds}`, target: "gear" })),
  ...skills.map((item) => ({ section: "스킬", title: item.title, body: item.body, target: "skills" })),
  ...pets.map((item) => ({ section: "펫", title: item.grade, body: `${item.options} ${item.type}`, target: "pets" })),
  ...runes.map((item) => ({ section: "룬", title: item.name, body: `${item.group} ${item.priority}`, target: "runes" })),
  ...mounts.map((item) => ({ section: "탈것", title: item.grade, body: `${item.damage} ${item.health} ${item.options}`, target: "mounts" })),
  ...offlineGuides.map((item) => ({ section: "비행기", title: item.title, body: item.body, target: "offline" })),
  ...clans.map((item) => ({ section: "클랜", title: item.name, body: `${item.server} ${item.leader} ${item.officers}`, target: "clan" })),
  ...leagueRows.map((item) => ({ section: "리그", title: `${item.rank} ${item.position}위`, body: `${item.hammer} ${item.gold} ${item.clockwork}`, target: "league" })),
  ...spendItems.map((item) => ({ section: "과금", title: item.title, body: `${item.price} ${item.condition} ${item.verdict}`, target: "spend" })),
  ...steppingStone.map((body, index) => ({ section: "디딤돌", title: `디딤돌 ${index + 1}`, body, target: "stepping" })),
];
