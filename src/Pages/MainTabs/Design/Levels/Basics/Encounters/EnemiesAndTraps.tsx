import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EnemiesAndTraps = () => {
  const markdownFilePath = 'Design/Levels/Basics/Encounters/EnemiesAndTraps';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Enemies & Traps" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnemiesAndTraps;
