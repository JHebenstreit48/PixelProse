import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GameDevelopmentBestPractices = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Advanced/GameOrientedConcepts/GameDevelopmentBestPractices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Game Development Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GameDevelopmentBestPractices;
