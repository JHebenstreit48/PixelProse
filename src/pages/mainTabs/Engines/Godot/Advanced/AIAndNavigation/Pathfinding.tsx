import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Pathfinding = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/AIAndNavigation/Pathfinding';

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
