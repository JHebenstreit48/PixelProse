import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const TimeAndRandomness = () => {
  const markdownFilePath = 'Engines/Unity/Testing/Isolation/TimeAndRandomness';

  return (
    <>
      <PageLayout>
        <PageTitle title="Time & Randomness" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TimeAndRandomness;
