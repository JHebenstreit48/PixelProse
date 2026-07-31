import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const WebGLWebAudioTypes = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Interop/GraphicsAndAudio/WebGLWebAudioTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="WebGL/WebAudio Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebGLWebAudioTypes;
