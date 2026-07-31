import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
