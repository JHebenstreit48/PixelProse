import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
