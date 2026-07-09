import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ECSBasics = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/DOTSAndJobs/ECSBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="ECS Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ECSBasics;
