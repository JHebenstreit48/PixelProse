import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
