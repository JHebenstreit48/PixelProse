import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const PostProcessing = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/Rendering/PostProcessing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Post-Processing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PostProcessing;
