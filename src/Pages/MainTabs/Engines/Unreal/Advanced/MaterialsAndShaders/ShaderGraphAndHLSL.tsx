import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ShaderGraphAndHLSL = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/MaterialsAndShaders/ShaderGraphAndHLSL';

  return (
    <>
      <PageLayout>
        <PageTitle title="Shader Graph & HLSL" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ShaderGraphAndHLSL;
