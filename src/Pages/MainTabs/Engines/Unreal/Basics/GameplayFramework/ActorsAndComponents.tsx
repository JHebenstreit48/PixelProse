import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ActorsAndComponents = () => {
  const markdownFilePath = 'Engines/Unreal/Basics/GameplayFramework/ActorsAndComponents';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Actors & Components" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ActorsAndComponents;
