import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
