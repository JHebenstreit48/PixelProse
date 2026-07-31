import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
