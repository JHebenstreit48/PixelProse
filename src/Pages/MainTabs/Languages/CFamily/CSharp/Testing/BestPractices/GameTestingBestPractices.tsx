import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GameTestingBestPractices = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Testing/BestPractices/GameTestingBestPractices';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Game Testing Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GameTestingBestPractices;
