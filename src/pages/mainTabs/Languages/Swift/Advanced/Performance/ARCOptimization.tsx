import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ARCOptimization = () => {
  const markdownFilePath = 'Languages/Swift/Advanced/Performance/ARCOptimization';

  return (
    <>
      <PageLayout>
        <PageTitle title="ARC Optimization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ARCOptimization;
