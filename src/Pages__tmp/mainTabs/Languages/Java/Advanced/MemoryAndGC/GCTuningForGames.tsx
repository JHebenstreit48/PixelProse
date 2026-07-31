import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
