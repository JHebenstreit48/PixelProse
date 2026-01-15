import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ARCOptimization = () => {
  const markdownFilePath = 'Languages/Swift/Advanced/Performance/ARCOptimization';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="ARC Optimization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ARCOptimization;
