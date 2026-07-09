import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
