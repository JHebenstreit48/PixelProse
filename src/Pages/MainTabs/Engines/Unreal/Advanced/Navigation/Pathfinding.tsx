import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Pathfinding = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/Navigation/Pathfinding';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Pathfinding" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Pathfinding;
