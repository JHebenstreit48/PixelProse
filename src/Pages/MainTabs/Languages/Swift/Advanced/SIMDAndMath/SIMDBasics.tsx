import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
