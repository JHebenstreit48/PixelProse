import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EditModeVsPlayMode = () => {
  const markdownFilePath = 'Engines/Unity/Testing/Basics/EditModeVsPlayMode';

  return (
    <>
      <PageLayout>
        <PageTitle title="EditMode vs PlayMode" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EditModeVsPlayMode;
