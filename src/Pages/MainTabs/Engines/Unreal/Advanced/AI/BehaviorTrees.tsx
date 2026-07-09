import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BehaviorTrees = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/AI/BehaviorTrees';

  return (
    <>
      <PageLayout>
        <PageTitle title="Behavior Trees" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BehaviorTrees;
