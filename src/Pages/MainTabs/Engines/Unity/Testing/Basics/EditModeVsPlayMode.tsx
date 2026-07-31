import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
