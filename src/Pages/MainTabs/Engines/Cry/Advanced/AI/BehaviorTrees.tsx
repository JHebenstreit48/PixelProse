import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BehaviorTrees = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/AI/BehaviorTrees';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Behavior Trees" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BehaviorTrees;
