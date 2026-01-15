import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ECSBasics = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/DOTSAndJobs/ECSBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="ECS Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ECSBasics;
