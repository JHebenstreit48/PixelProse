import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const StatCommandsAndProfilers = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/Performance/StatCommandsAndProfilers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Stat Commands & Profilers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StatCommandsAndProfilers;
