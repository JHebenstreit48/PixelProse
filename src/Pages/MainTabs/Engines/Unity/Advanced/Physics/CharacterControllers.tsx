import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CharacterControllers = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/Physics/CharacterControllers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Character Controllers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CharacterControllers;
