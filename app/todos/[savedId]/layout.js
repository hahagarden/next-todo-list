export async function generateMetadata({ params: { savedId } }) {
  const timestamp = new Date(Number(savedId));
  const month = timestamp.getMonth() + 1;
  const date = timestamp.getDate();
  const day = ['일', '월', '화', '수', '목', '금', '토'][timestamp.getDay()];

  return {
    title: `${month}월 ${date}일 ${day} | Next Todo`,
  };
}

export default function SavedLayout({ children }) {
  return <>{children}</>;
}
