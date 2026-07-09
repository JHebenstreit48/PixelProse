import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Pathfinding = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/Navigation/Pathfinding';

  return (
    <>
      <PageLayout>
        <PageTitle title="Pathfinding" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Pathfinding;
