import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RealTimeOptimizations = () => {
  const markdownFilePath = 'Languages/CFamily/C/Advanced/PreprocessingAndOptimization/RealTimeOptimizations';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Real-Time Optimizations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RealTimeOptimizations;
