import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
