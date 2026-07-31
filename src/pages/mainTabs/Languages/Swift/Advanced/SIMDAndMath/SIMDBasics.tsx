import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SIMDBasics = () => {
  const markdownFilePath = 'Languages/Swift/Advanced/SIMDAndMath/SIMDBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="SIMD Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SIMDBasics;
