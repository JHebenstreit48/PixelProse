import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BlueprintBasics = () => {
  const markdownFilePath = 'Engines/Unreal/Basics/Blueprints/BlueprintBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Blueprint Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BlueprintBasics;
