import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SIMDBasics = () => {
  const markdownFilePath = 'Languages/Swift/Advanced/SIMDAndMath/SIMDBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="SIMD Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SIMDBasics;
