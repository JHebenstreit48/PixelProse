import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JobsAndBurst = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/DOTSAndJobs/JobsAndBurst';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Jobs & Burst" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JobsAndBurst;
