import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
