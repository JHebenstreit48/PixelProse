import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
