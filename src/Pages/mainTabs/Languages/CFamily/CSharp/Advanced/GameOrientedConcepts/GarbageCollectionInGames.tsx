import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const GarbageCollectionInGames = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Advanced/GameOrientedConcepts/GarbageCollectionInGames';

  return (
    <>
      <PageLayout>
        <PageTitle title="Garbage Collection in Games" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GarbageCollectionInGames;
