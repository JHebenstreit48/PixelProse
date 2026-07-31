import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
