import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RealTimeOptimizations = () => {
  const markdownFilePath = 'Languages/CFamily/C/Advanced/PreprocessingAndOptimization/RealTimeOptimizations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Real-Time Optimizations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RealTimeOptimizations;
