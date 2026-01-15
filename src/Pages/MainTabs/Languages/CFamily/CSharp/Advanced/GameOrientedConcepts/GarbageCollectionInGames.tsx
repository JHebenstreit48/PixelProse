import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GarbageCollectionInGames = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Advanced/GameOrientedConcepts/GarbageCollectionInGames';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Garbage Collection in Games" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GarbageCollectionInGames;
