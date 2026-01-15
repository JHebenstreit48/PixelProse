import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StatCommandsAndProfilers = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/Performance/StatCommandsAndProfilers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Stat Commands & Profilers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StatCommandsAndProfilers;
