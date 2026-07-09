import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GCTuningForGames = () => {
  const markdownFilePath = 'Languages/Java/Advanced/MemoryAndGC/GCTuningForGames';

  return (
    <>
      <PageLayout>
        <PageTitle title="GC Tuning for Games" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GCTuningForGames;
