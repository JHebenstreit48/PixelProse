import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const JobsAndBurst = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/DOTSAndJobs/JobsAndBurst';

  return (
    <>
      <PageLayout>
        <PageTitle title="Jobs & Burst" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JobsAndBurst;
