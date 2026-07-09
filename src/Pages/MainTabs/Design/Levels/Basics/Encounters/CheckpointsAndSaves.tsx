import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CheckpointsAndSaves = () => {
  const markdownFilePath = 'Design/Levels/Basics/Encounters/CheckpointsAndSaves';

  return (
    <>
      <PageLayout>
        <PageTitle title="Checkpoints & Saves" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CheckpointsAndSaves;
