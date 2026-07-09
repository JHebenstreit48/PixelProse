import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ActorsAndComponents = () => {
  const markdownFilePath = 'Engines/Unreal/Basics/GameplayFramework/ActorsAndComponents';

  return (
    <>
      <PageLayout>
        <PageTitle title="Actors & Components" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ActorsAndComponents;
